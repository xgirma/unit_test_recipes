# Setting up test with Jasmine: Typescript

Preparing jasmine, _jasmine init_ creates a spec folder with Jasmine config _jasmine.json_. 
    
        npm run prepare
        
Keep all typescript tests outside the _spec_ folder. Use _tsc_ to transform and save your code under _spec_ folder.
     
        npm run clean 
        
        npm run build
        
Run the test 

        npm run test
        