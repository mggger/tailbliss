---
title: "Free Sentence Counter online Tool"
date: 2024-02-23
draft: false
language: en
description: "Use our sentence counter tool to quickly count the sentences in your text. Perfect for writers, editors, and anyone needing to analyze text."
---

<!-- @format -->

<section class="lg:pb-24 bg-gray-50 dark:bg-gray-800">
  <div class="max-w-screen-md px-4 py-8 mx-auto">
    <h1 class="text-xl font-bold text-center text-gray-900 dark:text-white">Sentence Counter Tool</h1>
    <p class="mb-8 font-light text-center text-gray-600 dark:text-gray-400">Enter your text below to use the sentence counter and find out the number of sentences. This sentences counter tool is perfect for quickly assessing text length.</p>
    <div id="sentence-counter-form" class="space-y-6">
      <div>
        <label for="sentenceInput" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Your Sentence:</label>
        <textarea id="sentenceInput" name="sentence" rows="4" class="block w-full p-4 text-md text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="Type your sentences here..."></textarea>
      </div>
      <div class="flex justify-center">
        <button onclick="countSentences()" class="px-6 py-2.5 text-sm font-medium text-blue-500 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-lg">Count Sentences</button>
      </div>
      <p id="sentenceCount" class="text-lg text-center text-gray-800 dark:text-gray-200">Sentence count will appear here.</p>
    </div>
  </div>
</section>

<script>
  function countSentences() {
    const text = document.getElementById('sentenceInput').value.trim();
    const sentences = text.split(/[.!?]+/).filter(Boolean); // Efficiently counts the sentences.
    document.getElementById('sentenceCount').innerText = `Sentence count: ${sentences.length}. The sentences counter has analyzed your input.`;
  }
</script>

