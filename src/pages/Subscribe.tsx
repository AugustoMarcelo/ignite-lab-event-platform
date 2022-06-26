import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Logo } from '../components/Logo';
import { ReactIcon } from '../components/ReactIcon';
import {
  useCreateSubscriberMutation,
  useGetFirstLessonQuery,
} from '../graphql/generated';

import codeMockUpImg from '../assets/code-mockup.png';

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation({});
  const { data: firstLesson } = useGetFirstLessonQuery();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    if (firstLesson?.lessons.length) {
      navigate(`event/lesson/${firstLesson.lessons[0].slug}`);
    }
  }

  return (
    <div className="h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center relative scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
      <div className="fixed top-1 left-1/2 transform -translate-x-1/2 -z-10">
        <ReactIcon />
      </div>

      <div className="w-full max-w-[1100px] flex flex-col items-center justify-between mt-10 lg:flex-row md:mt-20 mx-auto z-0">
        <div className="max-w-[640px] flex flex-col items-center mx-6 md:mx-0 lg:block">
          <Logo />

          <h1 className="mt-8 text-[1.875rem] leading-tight text-center md:text-4xl lg:text-start lg:text-[2.5rem]">
            Construa uma{' '}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React JS</strong>
          </h1>
          <p className="mt-6 mb-8 text-gray-200 leading-relaxed text-sm text-center md:text-xl lg:text-base lg:text-start lg:mt-4 lg:mb-0">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="w-full px-6 py-8 bg-gray-700 border-y border-gray-500 mt-0 md:mt-4 md:rounded md:border md:w-[560px] lg:w-auto md:p-8">
          <strong className="text-lg mb-6 block md:text-2xl">
            Inscreva-se gratuitamente
          </strong>

          <form
            className="flex flex-col gap-2 w-full"
            onSubmit={handleSubscribe}
          >
            <input
              className="bg-gray-900 rounded px-5 h-14 border-none hover:outline-none focus:ring-transparent focus:outline-none hover:outline-green-300 focus:outline-green-300 invalid:outline-red-500 focus:invalid:outline-red-500"
              type="text"
              placeholder="Seu nome completo"
              required
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14 border-none hover:outline-none focus:ring-transparent focus:outline-none hover:outline-green-300 focus:outline-green-300 invalid:outline-red-500 focus:invalid:outline-red-500"
              type="email"
              placeholder="Digite seu e-mail"
              required
              onChange={(event) => setEmail(event.target.value)}
            />

            <button
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              disabled={loading}
              type="submit"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img
        src={codeMockUpImg}
        className="w-[95%] mt-4 lg:w-full md:max-w-[1100px] md:mt-0 lg:mt-10"
        alt=""
      />

      <Footer page="subscribe" />
    </div>
  );
}
