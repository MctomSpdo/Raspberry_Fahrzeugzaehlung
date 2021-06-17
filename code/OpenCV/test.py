import io
import picamera
import cv2
import numpy

#Load a cascade file for detecting faces

lastimg = 0;


while True:
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

        image = cv2.rotate(image, cv2.ROTATE_90_CLOCKWISE)
        image = cv2.rotate(image, cv2.ROTATE_90_CLOCKWISE)

        #Convert to grayscale
        gray = cv2.cvtColor(image,cv2.COLOR_BGR2GRAY)

        #Convert to update of Image
        diff = 0;
        diff = cv2.absdiff(gray, lastimg, diff);
        
        #Make the difference bigger (0 or 255);
        thresh = 0;
        cv2.threshold(diff, thresh, 0, 255, cv2.THRESH_BINARY_INV | cv2.THRESH_OTSU);
    
        #Claculate Vectors
        vector<vector<Point>> contours;
        vector<vector<Point>> hierachy;
        cv2.findContours(thresh, contours, hierarchy, cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE);
        
        #print to screen
        cv2.imshow("show", image)
        lastimg = gray;
        cv2.waitKey(30)
        
        





#Save the result image
#cv2.imwrite('result.jpg',image)