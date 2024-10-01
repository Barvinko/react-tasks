interface OutputProps {
  outputData : string
}

function Output({outputData }: OutputProps) {
  console.log(outputData )
  return (
    <section>
      { outputData }
    </section>
  );
}

export default Output;