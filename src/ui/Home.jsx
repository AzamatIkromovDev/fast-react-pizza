import CreateUser from '../features/user/CreateUser.jsx';

function Home() {
  return (
    <div className="my-10 text-center ">
      <h1 className="mb-8 text-center text-xl font-semibold text-stone-700">
        The best pizza.
        <br />
        <span></span>
        Straight out of the oven, straight to you.
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
