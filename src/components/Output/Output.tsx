interface OutputProps {
  outputDate : string
}

function Output({outputDate }: OutputProps) {
  console.log(outputDate )
  return (
    <section>
      { outputDate }
    </section>
  );
}

export default Output;