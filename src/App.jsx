import MasterLayout from "./layout/MasterLayout";

const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/income" element={<IncomePage />} />
          <Route path="/expense" element={<ExpensePage />} />
        </Routes>
      </BrowserRouter> */}

      <MasterLayout/>
    </div>
  );
};

export default App;
