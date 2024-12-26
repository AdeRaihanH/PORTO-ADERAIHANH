import Layout from "../layout/Layout";

const ContactPage = () => {

  return (
    <Layout>
      <div className="bg-gradient-to-r from-blue-950 to-gray-500 h-screen flex justify-center items-center">
        <div className="text-white font-bold text-6xl">
          <h1 className="font-mono">Reach Me On</h1>
          
          <div className="mt-8 space-y-4 text-xl">
            <div className="flex items-center space-x-3">
              <span className="font-semibold">Email:</span>
              <a
                href="mailto:aderaihanhanafig3@gmail.com"
                className="text-teal-500 hover:text-teal-700"
              >
                aderaihanhanafig3@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <span className="font-semibold">Instagram:</span>
              <a
                href="https://www.instagram.com/are_raihanh?igsh=and1ZXZjYTQyanhh"
                className="text-teal-500 hover:text-teal-700"
              >
                @are_raihanh
              </a>
            </div>
          </div>
        
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
