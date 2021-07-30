const PCR = require('puppeteer-chromium-resolver');

(async () => {
  // 起一个PCR实例
  const pcr = await PCR()

  // 初始化浏览器
  const browser = await pcr.puppeteer.launch({
    // headless: true,
    headless: false,
    hosts: ['https://npm.taobao.org/mirrors'],
    args: ['--no-sandbox'],
    executablePath: pcr.executablePath
  }).catch(function (error) {
    console.error(error)
  })

  // 初始化页面
  const page = await browser.newPage()

  // 导航至目标页面
  const url = 'http://localhost:9000/'
  await page.goto(url, {waitUntil: 'domcontentloaded'})

  // 等待
  await page.waitFor(3000)

  // 获取数据
  const scrapedData = await page.evaluate(() => {
    // ====================
    // 这一部分将在浏览器中执行
    // ====================

    // 定义数据列表
    const data = []

    // 获取列表子项
    const elList = document.querySelectorAll('.m-airfly-lst > .b-airfly')

    // 遍历列表子项
    elList.forEach(el => {
      // 价格元素
      const elPr = el.querySelector('.fix_price .prc_wp')

      // 被替换元素列表
      let strArr = Array.from(elPr.querySelectorAll('b:first-child > i'))
        .map(elem => elem.innerText)

      // 替换元素
      elPr.querySelectorAll('b:not(:first-child)')
        .forEach(elem => {
          // 偏移量
          const left = Number(getComputedStyle(elem).left.replace('px', ''))

          // 替换值
          strArr[strArr.length + left / 16] = elem.innerText
        })

      // 加入数据列表
      data.push(strArr.join(''))
    })

    return data
  })

  // 打印抓取到的数据
  console.log(scrapedData)

  // 等待足够时间校验数据
  await new Promise((resolve) => setTimeout(() => {
    resolve()
  }, 60000))

  // 关闭浏览器
  await browser.close()
})()
