interface TrieNode {
  children: Record<string, TrieNode>;
  isEnd?: boolean;
}
const useTree = (country: string[]) => {
  const root: TrieNode = {
    children: {},
  };

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
    for (const char in node) {
      if (char !== "isEnd") {
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

  country.forEach(insert);

  return {
    autoComplete,
    insert,
  };
};

export default useTree;
