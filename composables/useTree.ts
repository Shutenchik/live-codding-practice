interface TrieNode {
  children: Record<string, TrieNode>;
  isEnd?: boolean;
}
const useTree = (countries: string[], country: Ref<string>) => {
  const root: TrieNode = {
    children: {},
  };

  const isEnd = ref(false);

  const insert = (word: string) => {
    let node = root;
    for (const char of word.toLowerCase()) {
      if (!node.children[char]) {
        node.children[char] = { children: {} };
      }
      node = node.children[char];
    }
    node.isEnd = true;
  };

  const dfs = (node: TrieNode, path: string, results: string[]) => {
    if (node.isEnd) return results.push(path);
    for (const char in node.children) {
      if (node.children[char]) {
        dfs(node.children[char], path + char, results);
      }
    }
  };

  const autoComplete = (prefix: string) => {
    let node = root;

    for (const char of prefix.toLowerCase()) {
      if (!node.children[char]) return [];
      node = node.children[char];
    }
    const results: string[] = [];
    dfs(node, prefix.toLowerCase(), results);
    return results;
  };

  const clearFieldIsEnd = (input: string) => {
    if (typeof input !== "string") {
      isEnd.value = false;
      return;
    }

    let node = root; // Start from the root node
    for (const char of input.toLowerCase()) {
      if (!node.children[char]) {
        isEnd.value = false; // Reset `isEnd` if the word is not found
        return;
      }
      node = node.children[char]; // Move to the next node
    }

    isEnd.value = !!node.isEnd;
    if (isEnd.value) {
      country.value = "";
    }
  };

  countries.forEach(insert);

  return {
    autoComplete,
    insert,
    clearFieldIsEnd,
    root,
  };
};

export default useTree;
