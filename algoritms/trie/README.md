# Trie Autocomplete (Prefix Tree)

## Описание задачи

Реализуй структуру данных **Trie (Prefix Tree)** для автодополнения стран на русском языке по вводимому префиксу.

## Цель

Симулировать простой **autocomplete по странам**. Тоби нужно:

1. Реализовать класс `TrieNode`
2. Реализовать класс `Trie`:
   - `insert(word: string)`
   - `autoComplete(prefix: string): string[]`
3. Создать мок-массив стран
4. Создать UI-поиск с подсказками

## Структура папки

```
/algorithms/trie/
├─ Trie.ts         # Реализация классов Trie и TrieNode
├─ countries.ts    # Массив стран на русском
├─ useTrie.ts      # Реф для Vue обработки input
├─ Autocomplete.vue # UI-компонент для поиска
└─ README.md
```

## Пример взаимодействия

```ts
const trie = new Trie();
countries.forEach((c) => trie.insert(c));
console.log(trie.autoComplete("К")); // ["Казахстан", "Канада", "Кения", ...]
```

## Требования

- Typescript
- Vue 3
- Composition API
- Без внешних библиотек

## Цель для понимания

Задача показывает практическую ценность структуры Trie, учит принципам рекурсии, DFS и обработке ввода.
