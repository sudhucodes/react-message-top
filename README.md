# React Message Top

![Version](https://img.shields.io/npm/v/react-message-top) ![License](https://img.shields.io/npm/l/react-message-top) ![Downloads](https://img.shields.io/npm/dt/react-message-top)

A simple and lightweight message notification bar for React applications. Display notifications at the top of the page with ease.

## Features
- 🚀 Lightweight and easy to use  
- 🎨 Customizable styles  
- ⏳ Auto-hide after a set duration  
- ✅ No external dependencies  

---

## Installation

Install via npm:
```sh
npm install react-message-top
```

---

## Usage

### Import and Use in Your React App
```jsx
import React from "react";
import MessageContainer from "react-message-top";

const App = () => {
  return (
    <div>
      <MessageContainer />
      <button onClick={() => message.show("Hello, this is a message!")}>
        Show Message
      </button>
    </div>
  );
};

export default App;
```

---

## API

### `message.show(message, duration)`

| Parameter  | Type     | Default | Description |
|------------|---------|---------|-------------|
| `message`  | `string` | `""`   | The message to display |
| `duration` | `number` | `4000` | Time in milliseconds before hiding |

Example:
```js
message.show("Welcome to React!", 5000);
```

---

## Styling

The default styles are included, but you can customize them using CSS:
```css
.message-top {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 100%;
  font-size: 0.875rem;
  text-align: center;
  color: white;
  background: linear-gradient(to right, #8b5cf6, #9938ca, #e0724a);
  transition: all 0.5s ease-in-out;
  overflow: hidden;
}

.message-top.hidden {
  height: 0;
}

.message-top.visible {
  height: 2.25rem;
}
```

---

## Contributing

Contributions are welcome! Feel free to open an issue or pull request.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes and commit (`git commit -m "Added new feature"`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

---

## Author

**Sudhanshu Kumar**  
GitHub: [sudhucodes](https://github.com/sudhucodes)  
Website: [sudhucodes.com](https://sudhucodes.vercel.app)  

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.