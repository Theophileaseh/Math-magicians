function Button() {
  return (
    <div className="buttonContainer">
      <div className="row-2">
        <button type="button" className="button" value="AC">AC</button>
        <button type="button" className="button" value="+/-">+/-</button>
        <button type="button" className="button" value="%">%</button>
        <button type="button" className="button main" value="/">/</button>
      </div>
      <div className="row-3">
        <button type="button" className="button" value="7">7</button>
        <button type="button" className="button" value="8">8</button>
        <button type="button" className="button" value="9">9</button>
        <button type="button" className="button main" value="*">*</button>
      </div>
      <div className="row-4">
        <button type="button" className="button" value="4">4</button>
        <button type="button" className="button" value="5">5</button>
        <button type="button" className="button" value="6">6</button>
        <button type="button" className="button main" value="-">-</button>
      </div>
      <div className="row-5">
        <button type="button" className="button" value="1">1</button>
        <button type="button" className="button" value="2">2</button>
        <button type="button" className="button" value="3">3</button>
        <button type="button" className="button main" value="+">+</button>
      </div>
      <div className="row-6">
        <button type="button" className="button double" value="0">0</button>
        <button type="button" className="button" value=".">.</button>
        <button type="button" className="button main" value="=">=</button>
      </div>
    </div>
  );
}

export default Button;
