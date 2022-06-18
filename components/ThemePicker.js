const myThemes = [
  {
    id: "light",
    name: "Light",
    type: "light",
    unlocked: true,
  },
  {
    id: "sky",
    name: "Sky",
    type: "light",
    unlocked: true,
  },
  {
    id: "dark",
    name: "Dark",
    type: "dark",
    unlocked: true
  },
  {
    id: "midnight",
    name: "Midnight",
    type: "dark",
    unlocked: true
  },
]

let ThemePicker = ({ theme, setTheme }) => {
  return (
  <div className="palette__theme-container">
    {myThemes.map((item, index) => (
      <div key={item.id} className={`palette__item theme-${item.id}`}>
        <div
          className={`palette__circle ${item.id}`}
          aria-label={`Theme ${item.name}`}
          onClick={() => setTheme(`theme-${item.id}`)}
        >
        </div>
      </div>
    ))}
  </div>
  );
}
export default ThemePicker;