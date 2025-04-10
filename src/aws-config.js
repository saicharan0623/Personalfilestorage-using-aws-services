export const awsConfig = {
    Auth: {
      Cognito: {
        userPoolId: 'us-east-1_b3ZRi90ac',
        userPoolClientId: '1g478utas6j2oat4ngtphgjd0b',
        identityPoolId: 'us-east-1:5b3a61f7-b472-4df1-8c6d-b4806f61a32a',
        loginWith: {
          email: true,
          username: true
        }
      }
    },
    Storage: {
      S3: {
        bucket: 'personal-storage-files-saicharan',
        region: 'us-east-1'
      }
    }
  };