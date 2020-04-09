# Deployment of COVID-19 survey system

 - Checkout the code from git
 - In the `survey` subfolder (the front-end), build the production system with `ng build --prod --base-href '/scratch/covid19/survey/'`
 - Copy the distribution online (to the digital ocean instance).  From the `dist` folder, `scp -r ./survey do:/home/jpebe/www/bitsilla.com/scratch/covid19`
 - On the cloud instance, we use `tmux` to run the front-end (`survey`) and back-end (`api`).  This could be as easy as `tmux new -s COVID19`
 - To start the back-end, from the `api` directory, run `npm install` (to install the libraries) followed by `npm run start` (this is for development)


The system is now available [here](https://bitsilla.com/scratch/covid19/survey/)