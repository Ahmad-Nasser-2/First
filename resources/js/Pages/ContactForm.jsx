import { useForm } from '@inertiajs/react';

export default function ContactForm() {
  const { data, setData, post, errors } = useForm({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/contact');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">


       {/* {recentlySuccessful && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
          {flash.success}
        </div>
      )} */}



      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Name</label>
        <input
          id="name"
          type="text"
          value={data.name}
          onChange={(e) => setData('name', e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input
          id="email"
          type="text"
          value={data.email}
          onChange={(e) => setData('email', e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700">Message</label>
        <textarea
          id="message"
          value={data.message}
          onChange={(e) => setData('message', e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}
