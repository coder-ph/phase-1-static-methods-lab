class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase()+ string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-' ]/g, '')
  }
  static titleize(sentence) {
    const smallWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    
    const words = sentence.split(" ");
    
    const titleized = words.map((word, index) => {
      if (index === 0) {
        return this.capitalize(word);
      }
      
      if (!smallWords.includes(word.toLowerCase())) {
        return this.capitalize(word);
      }
      
      return word.toLowerCase();
    });
    
    return titleized.join(" ");
  }
}

