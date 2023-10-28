interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <h2 className="mb-5 font-bold uppercase">{title}</h2>;
};

export default Title;
