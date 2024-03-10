---
title: "Introduce Embed: Quickstart"
date: 2024-03-10
draft: false
description: "Learn how to train your own knowledge base and effortlessly integrate with OpenAI's custom GPTs for increasingly accurate responses based on user inquiries."
categories: ["embed"]
tags: ["embed"]
toc: true
featured_image: ../assets/images/featured/access-to-gpts.webp
---


# Quickstart
This article introduces how to train your own knowledge base and seamlessly integrate with OpenAI custom GPTs. By refining our knowledge base in response to user questions, we can provide increasingly accurate answers.

## Background
The functionality of OpenAI custom GPTs' knowledge bases has been significantly reduced. Currently, uploaded files can only be utilized by Python code and cannot accurately provide context for user chats. OpenAI notes that:
```
If you upload files under Knowledge, 
conversations with your GPT may include file contents. 
Files can be downloaded when Code Interpreter is enabled
```

Therefore, the Embed service offers the following functionalities:
1. Train your own knowledge base.
2. Easily integrate any chatbot.
3. Record user queries for continuous optimization. If a match is found to be inaccurate, we can retrain the knowledge base and monitor daily activity.


## Training Knowledge
We will train a robot on GPT development, focusing on data sources such as URLs, documents (e.g., PDF, Word)...
### Train URL
Fill in the URL and description. The description is used to match user queries.
![Embed Train Url](/images/embed/train_url.png)

### Train Text
For documents like PDFs and Word files, we can extract the text. This text, along with a summary or the extracted text itself, can be used to train the model to match user queries.
![Embed Train Text](/images/embed/train_text.png)

### Train Records
After successful training, we can view the training records. If the subsequent chat matching is too poor, we can retrain.
![Embed Train Records](/images/embed/train_records.png)


## Integrating OpenAI Custom GPTs
Incorporating OpenAI Custom GPTs into your services enriches the interaction by leveraging specialized knowledge bases. This integration follows a straightforward two-step process:
1. **Acquiring an API Key**.
2. **Creating OpenAI Custom Actions**.

### Acquiring an API Key
Start by accessing the Embed service page and navigate to the Settings section. Here, you'll find the API key which you need to copy. This key serves as a token for authenticating your requests to the OpenAI services.
![API Key Settings](/images/embed/setting.png)

Once you have the API token, move to the OpenAI GPTs action configuration page. Here, set the authentication type to Bearer and paste the previously copied API key into the designated field, ensuring secure communication between your service and OpenAI.
![API Key Configuration](/images/embed/api_key.png)

### Creating OpenAI Custom Actions
Proceed to the Embed service's OpenAI Custom GPTs integration section. This step involves specifying the action's name, providing a descriptive summary, and setting your privacy preferences. Confirm these details by clicking 'save'.
![Action Creation](/images/embed/action_create.png)

Upon saving, you'll see an 'Integrate' button. Clicking this button reveals the YAML definition of the action and the privacy URL, both critical for the next steps of integration.
![Action Definition](/images/embed/action_define.png)

Copy these details into the appropriate fields within the OpenAI action definition and privacy link sections, completing the setup process.
![Action Configuration](/images/embed/action_config.png)

### Letting GPTs Use This Action
To empower GPTs with this custom action, use the following structured prompt. It instructs the GPT on how to access and utilize the `getKnowledge` action to fetch relevant information from the trained knowledge base for answering user queries accurately.
```
To answer user's questions you will search the right getKnowledge 
by calling the action 'getKnowledge'
```


## Chat & Continuous Optimization

### Chat
To ensure your integration is set up correctly, start by testing it through the OpenAI GPTs interface. Enter a query that your knowledge base should be able to answer. A successful test indicates that the GPTs can accurately retrieve and use the information from your trained knowledge base, confirming a correct configuration.

![Action Test](/images/embed/gpt_chat.png)

### Reviewing Chat Records

The Embed service also offers a valuable feature for ongoing improvement: the ability to review chat records. This allows you to see the questions users have asked and how well the responses matched the training data. Analyzing these interactions is crucial for identifying areas where the knowledge base can be enhanced to better meet user needs.

![Chat Records](/images/embed/chat_records.png)

### Continuous Optimization

Satisfaction with responses is key. If a response to a user query does not meet your expectations, you have the option to refine and expand your knowledge base. Visit the Train Records section and use the Retrain option to enrich the descriptions of your knowledge. This process includes adjusting and adding varied perspectives to better align with user queries, enabling continuous optimization and improvement of response accuracy.

## Conclusion

Building and maintaining a responsive and accurate chat service requires ongoing effort and refinement. The tools provided by Embed for training, integrating, and optimizing your knowledge base are designed to facilitate this process, ensuring that your chatbot remains a valuable resource for users. For further assistance or inquiries, feel free to [contact us](/contact).
