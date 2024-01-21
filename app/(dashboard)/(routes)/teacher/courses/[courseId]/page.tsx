const CourseIdPage = ({ params }: { params: { courseId: string } }) => {
  return (
    <div>
      <p>course Id {params.courseId}</p>
    </div>
  )
}

export default CourseIdPage
