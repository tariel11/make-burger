function App() {
  return (
    <div className="App">
      <div className="container">

      <header className="flex justify-between items-center py-10 border-2 border-dotted border-neutral-600">

          <div className="text-5xl">
            LOGO
          </div>

          <ul className="flex justify-between  gap-[100px] text-xl">
            <li className="hover:bg-violet-600 transition-colors "><a href="#">О нас </a></li>
            <li><a href="#">Наши работы</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </header>
      </div>
    </div>
  );
}

export default App;
