import { DefaultUi, Player, Youtube } from '@vime/react';
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from 'phosphor-react';

import '@vime/core/themes/default.css';
import { useGetLessonBySlugQuery } from '../graphql/generated';
import { Footer } from './Footer';

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex-1 animate-pulse">
        <div className="bg-black flex justify-center">
          <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video"></div>
        </div>

        <div className="p-7 max-w-[1100px] mx-auto md:p-8">
          <div className="flex flex-col items-start gap-6 md:gap-16 md:flex-row">
            <div className="flex-1 w-full">
              <div className="w-[80%] h-4 bg-gray-600 rounded-full mb-4" />
              <div className="flex flex-1 w-full flex-col gap-2">
                <div className="w-full h-2 bg-gray-600 rounded-full" />
                <div className="w-[95%] h-2 bg-gray-600 rounded-full" />
                <div className="w-full h-2 bg-gray-600 rounded-full" />
                <div className="w-[90%] h-2 bg-gray-600 rounded-full" />
              </div>
              <div className="flex flex-1 items-center gap-4 mt-6">
                <div className="h-16 w-16 rounded-full bg-gray-600" />

                <div className="flex flex-col gap-2 w-full">
                  <div className="w-[50%] h-2 bg-gray-600" />
                  <div className="w-full h-2 bg-gray-600" />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full gap-4 md:w-auto">
              <div className="p-8 w-full bg-gray-700 rounded md:w-[15rem]" />
              <div className="p-8 w-full bg-gray-700 rounded md:w-[15rem]" />
            </div>
          </div>

          <div className="gap-8 mt-16 grid md:grid-cols-2 md:mt-20">
            <div className="bg-gray-700 h-12 rounded overflow-hidden flex items-stretch gap-4 hover:bg-gray-600 transition-colors md:gap-6" />
            <div className="bg-gray-700 h-12 rounded overflow-hidden flex items-stretch gap-4 hover:bg-gray-600 transition-colors md:gap-6" />
          </div>
        </div>
        <Footer page="event" />
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-7 max-w-[1100px] mx-auto md:p-8">
        <div className="flex flex-col items-start gap-6 md:gap-16 md:flex-row">
          <div className="flex-1">
            <h1 className="text-lg font-bold md:text-2xl">
              {data.lesson.title}
            </h1>
            <p className="text-sm mt-4 text-gray-200 leading-relaxed md:text-base">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={data.lesson.teacher?.avatarURL}
                  alt=""
                />

                <div className="leading-relaxed">
                  <strong className="font-bold text-lg block md:text-2xl">
                    {data.lesson.teacher?.name}
                  </strong>
                  <span className="text-gray-200 text-sm block">
                    {data.lesson.teacher?.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col w-full gap-4 md:w-auto">
            <a
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
              href="https://discord-service.rocketseat.dev/signin/ignite-lab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>
            {data.lesson.challenge && (
              <a
                className="p-4 text-sm flex items-center rounded border border-blue-500 text-blue-500 font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
                href={data.lesson.challenge.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Lightning size={24} />
                Acesse o desafio
              </a>
            )}
          </div>
        </div>

        <div className="gap-8 mt-16 grid md:grid-cols-2 md:mt-20">
          <a
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-4 hover:bg-gray-600 transition-colors md:gap-6"
            href="https://efficient-sloth-d85.notion.site/Material-complementar-86d4ef35af16471ebc3ae3eba1a378e5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-4 md:py-6 leading-relaxed">
              <strong className="text-lg md:text-2xl">
                Material complementar
              </strong>
              <p className="text-xs leading-[1.2rem] text-gray-200 mt-2 md:text-sm">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="h-full px-4 flex items-center md:p-6">
              <CaretRight size={24} className="text-blue-500" />
            </div>
          </a>

          <a
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-4 hover:bg-gray-600 transition-colors md:gap-6"
            href="https://drive.google.com/drive/folders/1mxWnvlqmH7MbVRv2Na9xFNgCQCygM1iR?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <Image size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-lg md:text-2xl">
                Wallpapers exclusivos
              </strong>
              <p className="text-xs leading-[1.2rem] text-gray-200 mt-2 md:text-sm">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
            <div className="h-full px-4 flex items-center md:p-6">
              <CaretRight size={24} className="text-blue-500" />
            </div>
          </a>
        </div>
      </div>
      <Footer page="event" />
    </div>
  );
}
