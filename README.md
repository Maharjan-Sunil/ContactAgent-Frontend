The project is all about RECAPTCHA and CI-CD with Travis. However, the backend api is up to user choice.
Scenario, 
The travis.yml file has setup for CI-CD where we have included github token to access the repo for build and deploy. 
Currenty, there are two option in 
![image](https://user-images.githubusercontent.com/34715139/119087579-11335600-ba27-11eb-8ad2-ae974b086378.png)
the first one is for branch (will trigger whenever we merge to master branch) where the travis build the project and create branch gh-page and deploy the applcation to that branch which is reflected in githup page section for live
![image](https://user-images.githubusercontent.com/34715139/119087784-68392b00-ba27-11eb-97ea-9da0dd57bc04.png)
and the section one will trigger every time we create pull request but doen't deploy the applicaition.
