import { SearchButton, SearchInput } from './SearchForm.styled';

interface ISearchFormProps {
  value: string;
  onSubmit: (value: string) => void;
}
const SearchForm: React.FC<ISearchFormProps> = ({ value, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      query: { value: string };
    };
    const searchQuery: string = target.query.value;
    onSubmit(searchQuery.toLowerCase().trim());
  };
  return (
    <form onSubmit={handleSubmit}>
      <SearchInput type="text" name="query" defaultValue={value} />
      <SearchButton type="submit">Find films</SearchButton>
    </form>
  );
};

export default SearchForm;
