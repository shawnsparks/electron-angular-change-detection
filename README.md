This is an Electron app using Angular 2 to demonstrate an issue with change detection after using Electron's ipcRenderer. To recreate the issue, follow these steps

# clone the repo
# npm install
# npm run build && npm start
# add some values
# remove one or two to see that remove button works
# File > Save to save values to json
# Remove all values
# File > Load json File
# Click remove button to notice the view is not updated but model is (see console logging)
# Click "Do Nothing" button to cause change detection to run and see that model was updated.
# Ponder why the remove button didn't work the entire time
