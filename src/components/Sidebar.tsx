import classNames from 'classnames';
import { useGetLessonsQuery } from '../graphql/generated';
import { useSidebar } from '../hooks/useSidebar';
import { Lesson } from './Lesson';

export function Sidebar() {
  const { data } = useGetLessonsQuery();
  const { sidebarIsOpened } = useSidebar();

  return (
    <aside
      className={classNames(
        'absolute z-50 w-full h-full bg-gray-700 p-6 border-gray-600 duration-300 ease-in md:w-[348px] md:border-l md:relative md:h-auto',
        {
          'left-[50%] translate-x-[50%] md:left-0 md:translate-x-0':
            !sidebarIsOpened,
          'left-0 translate-x-0': sidebarIsOpened,
        }
      )}
    >
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  );
}
