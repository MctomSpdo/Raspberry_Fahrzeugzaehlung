import io
import picamera
import cv2
import numpy

#Load a cascade file for detecting faces

lastimg = 0;

#return the difference between the image and the last Image
def imgDiff(image):
        diff = 0;
        diff = cv2.absdiff(gray, lastimg, diff);
        
        ret, thresh = cv2.threshold(diff, 30, 255, cv2.THRESH_BINARY_INV)
        
        return thresh;
    
#makes an Image from the camera
def getImg():
        #Create a memory stream so photos doesn't need to be saved in a file
        stream = io.BytesIO()

        #Get the picture (low resolution, so it should be quite fast)
        #Here you can also specify other parameters (e.g.:rotate the image)
        with picamera.PiCamera() as camera:
                camera.resolution = (640, 480)
                camera.capture(stream, format='jpeg')
        #Convert the picture into a numpy array
        buff = numpy.frombuffer(stream.getvalue(), dtype=numpy.uint8)

        #Now creates an OpenCV image
        image = cv2.imdecode(buff, 1)
        return image;

#roatetes the Image by 180 degrees
def rotate180(image):
        image = cv2.rotate(image, cv2.ROTATE_90_CLOCKWISE)
        image = cv2.rotate(image, cv2.ROTATE_90_CLOCKWISE)
        return image

while True:
        image = rotate180(getImg());
        
        gray = cv2.cvtColor(image,cv2.COLOR_BGR2GRAY)
        thresh = imgDiff(gray);
        
        lastimg = gray;
        
        ################################################ TO VECTORS #####################################################
        
        #vector<vector<Point>> contours;
        
        #print to screen
        cv2.imshow("show", thresh)
        cv2.imshow("showReal", image)
        cv2.waitKey(5)