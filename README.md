
# 🔐 AWS Cloud-Personal Data Manager

🔗 **Live Demo:** [https://main.d1yq2rbfzqan7e.amplifyapp.com/](https://main.d1yq2rbfzqan7e.amplifyapp.com/)


This project demonstrates how developers can build secure, scalable, and responsive web applications using **AWS**. It leverages a **serverless architecture** and combines powerful AWS services with modern frontend tools to create a seamless personal data management system.

## 🚀 Features

- 🔐 **Authentication** with AWS Cognito  
- ☁️ **Read / Write / Update / Delete** (CRUD) operations on Amazon S3  
- ⚡ **Frontend** built using React + Vite  
- 🌐 **Deployed via AWS Amplify** with CI/CD  
- 📦 **Serverless backend** — no manual server management  
- 🔄 **Auto-scaling**, high availability, and secure data handling  
- 💡 Clean, responsive UI for a smooth user experience  

## 🛠️ Tech Stack

| Frontend      | Backend      | Cloud Services        |
|---------------|--------------|------------------------|
| React         | Serverless   | AWS Cognito (Auth)     |
| Vite          | AWS SDK      | AWS S3 (Storage)       |
| Tailwind CSS* | -            | AWS Amplify (Hosting)  |

*Optional styling library

## 🧪 Project Architecture

Frontend (React + Vite)
       |
AWS Cognito (User Auth)
       |
AWS S3 (Secure File Storage)
       |
AWS Amplify (CI/CD + Hosting)

## 🧰 Setup Instructions

1. Clone the Repo

git clone https://github.com/saicharan/personalfilestorage-using-aws-services.git
cd ersonalfilestorage-using-aws-services

2. Install Dependencies

npm install

3. Configure AWS

Make sure you have the AWS CLI installed and configured. Create the following in your AWS account:

- Cognito User Pool
- S3 Bucket (with appropriate CORS & permissions)
- Amplify App (for deployment)

4. In Auth File configure your Ids and Name
VITE_AWS_REGION=your-region
VITE_USER_POOL_ID=your-cognito-user-pool-id
VITE_CLIENT_ID=your-cognito-client-id
VITE_S3_BUCKET=your-s3-bucket-name

5. Start the Development Server

npm run dev

## 📦 Build and Deploy

Local Production Build

npm run build

Deploy via AWS Amplify

- Connect your GitHub repo to AWS Amplify
- Configure build settings in `amplify.yml` or Amplify dashboard
- Amplify will handle CI/CD, SSL, custom domains, and more

## 📸 Demo Screenshots

You can include screenshots or GIFs here showcasing the login, file upload, and dashboard UI.

## 📌 Key Takeaways

- Minimal backend code with maximum scalability  
- Clean React + Vite frontend paired with AWS's robust infrastructure  
- Secure user authentication and file storage  
- Fully serverless — no EC2, no Lambda, only AWS services like Cognito, S3, Amplify  
- Focused on developer experience and performance  

## 🙌 Acknowledgements

Thanks to the AWS community and documentation for making serverless development accessible and scalable.
