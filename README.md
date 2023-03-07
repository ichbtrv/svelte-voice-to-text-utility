# Svelte Voice to Text Utility

I've been working on some variations of projects with voice recognition and decided to post a basic version in the form of a psuedo search bar. It has some stripped back features of other implementations

- Ability to capture and persist audio recording has been removed
- Ability to collect more than one instance of voice capture has been removed
- Automatic clearing of voice input has been removed


## Features

- An emulated search bar where you have the option to type or enter your query by speaking
- Some infrastructure for handling the actual audio recording has been left in place

### Caveat 
 - The Speech Recognition API is not supported by all major browsers
 - Polyfills are available but to avoid being too prescriptive, I have omitted them

