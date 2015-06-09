install : all
all: 
	gulp 'client'
	babel-node app.js --harmony
