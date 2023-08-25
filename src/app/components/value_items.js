const ValueItems = (props) => {
  return (
    <div>
      <h2 className=" font-viga text-lg mb-5">{props.title}</h2>
      <p className="text-sm">{props.body}</p>
    </div>
  );
};

export default ValueItems;
