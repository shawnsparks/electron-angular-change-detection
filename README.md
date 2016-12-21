This is an Electron app using Angular 2 to demonstrate an issue with change detection after using Electron's ipcRenderer. To recreate the issue, follow these steps

1. clone the repo
2. npm install
3. npm run build && npm start
4. add some values
5. remove one or two to see that remove button works
6. File > Save to save values to json
7. Remove all values
8. File > Load json File
9. Click remove button to notice the view is not updated but model is (see console logging)
10. Click "Do Nothing" button to cause change detection to run and see that model was updated.
11. Ponder why the remove button didn't work the entire time
