import os
import numpy as np
import matplotlib.pyplot as plt
import cv2
import PIL
import time
from PIL import Image
import requests
from bs4 import BeautifulSoup
class picture_process:
    def __init__(self):
        init=""
    def pic_get(self):
        for i in range(101,201):
            web = requests.get('https://ikpd.kcg.gov.tw/Captcha.aspx?type=ID')
            f = open('./picture/'+str(i)+'.jpg', 'wb')    # 將圖片開啟為二進位格式 ( 請自行修改存取路徑 )
            f.write(web.content)                 # 存取圖片
            f.close()
            time.sleep(1)

    def pic_cut(self):
        path=r"./picture/1.jpg"
        rawimg0 = cv2.imread(path) #原始照片    
        img_gray = cv2.cvtColor(rawimg0, cv2.COLOR_BGR2GRAY)   # 转换了灰度化
        cv2.imshow('gray', img_gray)  # 显示图片
        cv2.waitKey(0)

        # 2、将灰度图像二值化，设定阈值是100
        img_thre = img_gray
        cv2.threshold(img_gray, 100, 255, cv2.THRESH_BINARY_INV, img_thre)
        cv2.imshow('threshold', img_thre)
        cv2.waitKey(0)
         
        # counting non-zero value by row , axis y
        row_nz = []
        for row in img_thre.tolist():
            row_nz.append(len(row) - row.count(0))
        plt.plot(row_nz)
        plt.show()

        idx=np.array(row_nz)>(max(row_nz)/4) #截出上下的範圍
        np.where(idx==1)[0][0],np.where(idx==1)[0][-1]
        up_y=np.where(idx==1)[0][-1] #上界
        down_y=np.where(idx==1)[0][0] #下界
        rawimg1=img_thre[down_y:up_y,]
        

if __name__ == "__main__":
    picture_process=picture_process()
    picture_process.pic_cut()