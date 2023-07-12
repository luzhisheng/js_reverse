from PIL import Image,ImageDraw,ImageFont

# img1 = Image.open('1.jpg')
# img2 = Image.open('2.jpg')
#
# img = Image.new("RGB",img1.size)
# img.paste(img1,(0,0))
# img.paste(img2,(0,345))
# img.save('3.png', quality=70)


img = Image.open("1.jpg").convert('RGBA')
im = Image.open("2.png")
img = img.resize((35, 35), Image.ANTIALIAS)
r,g,b,a = im.split()
img.paste(im,(100, 100),mask = a)
img = img.convert('RGB')
img.save("test.png")