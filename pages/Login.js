import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div className="flex items-center flex-col bg-black min-h-screen w-full justify-center">
      <img
        className="w-60 mb-5"
        src="http://1000logos.net/wp-content/uploads/2017/08/Spotify-Logo.png"
      />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#18D860] text-white py-3 px-5 rounded-lg"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
