# ChatFlowUi Settings Tab

Customize your ChatFlowUi experience by configuring the settings below.

## System Prompt
- **Description:** The initial instruction for the LLM backend.
- **Example:** You are a helpful assistant for technical queries.


## Backend URL
- **Description:** URL for your LLM service.
- **Example:** https://api.example-llm.com/v1/endpoint

## Language Model
- **Description:** Select the language model to use.
- **Example Options:** 
  - GPT-3
  - GPT-3.5
  - Custom Model

## History Size
- **Description:** Number of past interactions to retain.
- **Example Values:** 
  - 4 (default)
  - 42
  - 420
  - 1337

## HTTP Headers
- **Description:** Custom HTTP headers for requests.

## Response Selector
- **Description:** Choose the appropriate response stream property to extract the desired content based on the selected model. This feature supports predefined options for specific LLM providers. User input for custom properties is not permitted.
- **Preselected Options:**
  - **SpringAI:** `data.result.output.content`
  - **OpenAI:** `choices[0].message.content`
  
Select the model to automatically use the corresponding response path.eful for ensuring that your application processes only the relevant part of the response.
