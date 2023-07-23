import AppNav from "../components/AppNav";

const MasterLayout = (props) => {
  return (
    <div>
      <AppNav/>
      {props.children}
    </div>
  );
};

export default MasterLayout;
