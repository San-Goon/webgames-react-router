import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import GuGuDan from "./pages/GuGuDan";
import Home from "./pages/Home";
import Lotto from "./pages/Lotto";
import MineSearch from "./pages/MineSearch";
import NumberBaseball from "./pages/NumberBaseball";
import ResponseCheck from "./pages/ResponseCheck";
import RSP from "./pages/RSP";
import TicTacToe from "./pages/TicTacToe";
import WordRelay from "./pages/WordRelay";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">홈</Link>
        <br />
        <Link to="/gugudan">구구단</Link>
        <br />
        <Link to="/lotto">로또</Link>
        <br />
        <Link to="/minesearch">지뢰찾기</Link>
        <br />
        <Link to="/numberbaseball">숫자야구</Link>
        <br />
        <Link to="/responsecheck">반응속도체크</Link>
        <br />
        <Link to="/rockscissorspaper">가위바위보</Link>
        <br />
        <Link to="/tictactoe">틱택토</Link>
        <br />
        <Link to="/wordrelay">끝말잇기</Link>
        <br />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gugudan" component={GuGuDan} />
          <Route path="/lotto" component={Lotto} />
          <Route path="/minesearch" component={MineSearch} />
          <Route path="/numberbaseball" component={NumberBaseball} />
          <Route path="/responsecheck" component={ResponseCheck} />
          <Route path="/rockscissorspaper" component={RSP} />
          <Route path="/tictactoe" component={TicTacToe} />
          <Route path="/wordrelay" component={WordRelay} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
