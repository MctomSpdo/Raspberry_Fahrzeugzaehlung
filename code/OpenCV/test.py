import io
import picamera
import cv2
import numpy

#the Dimentions of the captured Image
IMG_HEIGHT = 640
IMG_WIDTH = 480
#MIN Vector size to display / calculate them (old)
VECSIZE = IMG_HEIGHT / 40;
#the amount of calcsquares to use
CROPSIZE = 20;


lastimg = 0;

#return the difference between the image and the last Image
def imgDiff(image):
        diff = 0;
        diff = cv2.absdiff(gray, lastimg, diff);
        
        ret, thresh = cv2.threshold(diff, 30, 255, cv2.THRESH_BINARY)
        
        return thresh;
    
#makes an Image from the camera
def getImg():
        #Create a memory stream so photos doesn't need to be saved in a file
        stream = io.BytesIO()

        #Get the picture (low resolution, so it should be quite fast)
        #Here you can also specify other parameters (e.g.:rotate the image)
        with picamera.PiCamera() as camera:
                camera.resolution = (IMG_HEIGHT, IMG_WIDTH)
                camera.capture(stream, format='jpeg')
        #Convert the picture into a numpy array
        buff = numpy.frombuffer(stream.getvalue(), dtype=numpy.uint8)

        #Now creates an OpenCV image
        image = cv2.imdecode(buff, 1)
        return image;

#roatetes the Image by 180 degrees
def rotate180(image):
        image = cv2.rotate(image, cv2.ROTATE_180)
        return image

#displays the Image in a Window
def displayImg(title, img):
        cv2.imshow(title, img);
        
#OUTDATED: Used to draw the rects around the changes (new method used)
def drawChange(cnt):
        M = cv2.moments(cnt)
        area = cv2.contourArea(cnt)
        perimeter = cv2.arcLength(cnt,True)
        epsilon = 0.1 * perimeter
        approx = cv2.approxPolyDP(cnt,epsilon,True)
        hull = cv2.convexHull(cnt)
        
        x, y, w, h = cv2.boundingRect(cnt)
        #if rectange is tinier than a certain size, don't display
        if(w<VECSIZE):
            return
        if(h<VECSIZE):
            return
        cv2.rectangle(image,(x,y),(x+w,y+h),(0,0,255),2)
    
#crops the Image to a certain area given
def crop(y, x, height, width, img):
    return img[y:y+height, x:x+width]

#get the crops specified by CROPSIZE
def getCrops(img):
    h = IMG_HEIGHT / CROPSIZE
    w = IMG_WIDTH / CROPSIZE
    arr = []
    
    for i in range(CROPSIZE):
        li = []
        for j in range(CROPSIZE):
            li.append(crop(int(i * w),int(j * h), int(h), int(w), img))
        arr.append(li)
    return arr

#calculates all the copped images to percentages
def cropsToProcent(crops):
    arr = []
    
    for i in range(len(crops)):
        li = []
        for j in range(len(crops[i])):
            li.append(cropPrecent(crops[i][j]))
        arr.append(li)
    return arr


#calculates the procentage of 1 cropped Image
def cropPrecent(crop):
    if(len(crop) == 0):#only currently because of a bug
        return -1
    all = len(crop) * len(crop[0])
    av = 0
    
    for i in crop:
        for j in i:
            av += j
    av = av / all
    av = transformPerecent(av,255);
    return av;

#calculates the percentages between 0 and the given maximum (range: (0-255) 255 = 100%, 0 = 0%)
def transformPerecent(amount, max):
    return (amount * 100) / max

def drawCrops(crops, image):
    h = int(IMG_HEIGHT / CROPSIZE)
    w = int(IMG_WIDTH / CROPSIZE)
    
    for i in range(CROPSIZE):
        y = i * w
        for j in range(CROPSIZE):
            x = j * h
            col = int(crops[i][j] * 2.4);
            cv2.rectangle(image,(x,y),(x+h,y+w),(col,col,col),2)

#while loop for the image input stream (frame by frame
while True:
        image = rotate180(getImg());
        gray = cv2.cvtColor(image,cv2.COLOR_BGR2GRAY)
        
        thresh = imgDiff(gray);
            
        ################################################ TO VECTORS #####################################################        
        crops = getCrops(thresh)
        percent = cropsToProcent(crops)
        drawCrops(percent, image)
                 
        #print to screen
        displayImg("processing", thresh)
        displayImg("show", image)
        lastimg = gray;
        cv2.waitKey(5)