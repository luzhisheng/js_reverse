import requests

while True:
    keyword = '半斤塘口'

    url = f"https://www.douyin.com/aweme/v1/web/discover/search/?device_platform=webapp&aid=6383&channel=channel_pc_web&" \
          f"search_channel=aweme_user_web&keyword={keyword}&search_source=switch_tab&" \
          f"query_correct_type=1&is_filter_search=0&from_group_id=&offset=0&count=10&pc_client_type=1&" \
          f"version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=1920&screen_height=1080&" \
          f"browser_language=zh-CN&browser_platform=Linux+x86_64&browser_name=Chrome&browser_version=114.0.0.0&" \
          f"browser_online=true&engine_name=Blink&engine_version=114.0.0.0&os_name=Linux&os_version=x86_64&" \
          f"cpu_core_num=12&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=150&" \
          f"webid=7261162216640235023&" \
          f"msToken=9Y9pLJ4YoArPxaGNgqc-Ri79uPY5pStR6VQMU9nWYzAqlvjYFzNF0RibRR13GMJShBW4BUBc9pXGqXlyJ" \
          f"Fs5PUNJzekrpXonY3Hcet3YOIYXj1cgkqnqLQHOdddj3GE="

    headers = {
        'cookie': 'ttwid=1%7CA3JwTOHc_yCYti7V21gSG_2s1cJIjdM0ndYN3Bg3bnk%7C1690624371%7C556a8219c093e5b13b9e1e'
                  '157e82781dd10d46375730d210d50095bacb2bdc47;',
        'referer': 'https://www.douyin.com/search/%E5%8D%8A%E6%96%A4%E5%A1%98%E5%8F%A3?source=normal_sear'
                   'ch&aid=9853b6ad-fc01-441b-bc7f-4aaccc8b30bb&enter_from=live_detail',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.'
                      '0.0.0 Safari/537.36'
    }

    response = requests.request("GET", url, headers=headers)
    print(response.text)
