---
title: "How to Find and Install Modules in MediaWiki"
date: 2024-03-15
description: "A comprehensive guide on finding and installing modules in MediaWiki to enhance functionality and user experience, including step-by-step installation and management of module dependencies."
categories:
  - MediaWiki
  - Wiki Management
tags:
  - MediaWiki
  - Modules
  - Installation
  - Wiki Customization
toc: true
draft: false
faq:
  - question: "What are modules in MediaWiki?"
    answer: "Modules in MediaWiki are extensions that allow users to extend its functionality, offering customized features and enhancements for wikis."
  - question: "How can I find modules for MediaWiki?"
    answer: "Modules can be found in the MediaWiki documentation or specific module pages, offering a variety of functionalities to enhance your wiki's capabilities."
  - question: "What is the process for installing a module in MediaWiki?"
    answer: "Installing a module involves locating the module code, creating a new module page on your wiki, copying the code into the new page, and saving it. This process installs the module for use on your wiki."
  - question: "How do I manage module dependencies in MediaWiki?"
    answer: "Check the module code for 'require' statements to identify dependencies. Ensure all required modules are also installed on your wiki for the module to function correctly."
---


# How to Find and Install Modules in MediaWiki

MediaWiki, the software behind Wikipedia, is a powerful platform for creating and managing wikis. One of its strengths lies in its modularity, allowing users to extend its functionality through modules. In this guide, we'll explore how to find and install modules in MediaWiki, ensuring you can tailor your wiki to your needs.

## Finding Modules in MediaWiki

MediaWiki offers a variety of search-related modules, each designed to enhance your wiki's search capabilities. Here are some of the key modules:

### Action Specific Modules

- **API:Opensearch**: Enables searching wiki pages by title using the OpenSearch format.
- **API:Languagesearch**: Allows searching for a language name in any script, or by ISO code or native name.

### Query List Submodules

- **API:Search**: Provides advanced search functionalities for wiki pages by title or text.
- **API:Geosearch**: Facilitates searching for wiki pages near a location, using geographic coordinates or page name.
- **API:Prefixsearch**: Supports performing a prefix search for page titles.

These modules are essential for improving the search experience on your wiki, making it easier for users to find the information they need.

## Installing Modules in MediaWiki

Installing modules in MediaWiki is a straightforward process, but it's essential to understand the basics of how modules work within the platform. Modules in MediaWiki are saved as pages on the wiki itself, which means you don't install them in the traditional sense of downloading and uploading files to your server.

### Step-by-Step Guide to Installing a Module

1. **Find the Module Code**: Locate the code for the module you wish to install. This can often be found in the MediaWiki documentation or the module's specific page.

2. **Create a New Module Page**: Navigate to your wiki and create a new page in the Module namespace. For example, if you're installing the String module, you would create a page titled "Module:String".

3. **Copy and Paste the Module Code**: Copy the code for the module and paste it into the new page you've created on your wiki.

4. **Save the Page**: Save the page. The module is now installed and ready to be used on your wiki.

### Managing Module Dependencies

It's crucial to be aware that some modules depend on other modules to function correctly. When installing a module, check for any dependencies and ensure they are also installed on your wiki. Look for "require" statements within the module code to identify these dependencies.

## Conclusion

Enhancing your MediaWiki site with modules can significantly improve the user experience, providing advanced search capabilities and custom functionalities. By understanding how to find and install these modules, you can take full advantage of what MediaWiki has to offer. Remember, the key to successfully using modules lies in carefully managing dependencies and ensuring all required modules are installed on your wiki.
