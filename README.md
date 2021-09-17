# archaos

https://kgotgit.medium.com/monorepo-pattern-setting-up-angular-workspace-for-multiple-applications-in-one-single-repository-4e14bc0d0cc0

-------------------------------------------------------------------------------------------------------------

  -- create a monorepo --
ng new monorepo_name --create-application false

  -- create angular app --
ng g application appname --routing

  -- create angular lib --
ng g lib libname

  -- add start command: on package.json, scripts section --
"start:app_name":"ng serve --project=appname --port 4000"

  -- run app --
npm run start:app_name

-------------------------------------------------------------------------------------------------------------

  -- create api --
dotnet new sln	                    take name of the current folder and create a solution file
dotnet new webapi -o schoolapi	    create webapi project on output directory
dotnet sln add schoolapi	          add project to solution
dotnet dev-cetrs https --trust	    Trust dotnet sdk certificate(windows & mac only)
dotnet watch run	                  to listen every changes on the code
dotnet new gitignore	              to generate fitignore file
