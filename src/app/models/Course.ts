export interface Course{
  courseId: number;
  title: string;
  file: Uint8Array;
  duration?: number;
  route: string;
  price: number;
  teacherId: number;
}
