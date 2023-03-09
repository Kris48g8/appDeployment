
import courseData from './courseData';

type Lesson = {
  title: string;
  slug: string;
  number: string;
  text: string;
  videoId: number;
  sourceUrl?: string;
  downloadUrl: string;
  path: string;
}

type Chapter = {
  title: string;
  slug: string;
  number: string;
  lessons: Lesson[];
}

type Course = {
  title: string;
  chapters: Chapter[]
}

export const useCourse = (): Course => {
  const chapters: Chapter[] = courseData.chapters.map(
    (chapter) => {
      const lessons: Lesson[] = chapter.lessons.map(
        (lesson) => ({
          ...lesson,
          path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`
        })
      );
      return {
        ...chapter,
        lessons,
      };
    }
  );
  return {
    ...courseData,
    chapters,
  };
};