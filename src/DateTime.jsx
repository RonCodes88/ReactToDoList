export function DateTime() {
  let showDate = new Date();
  let dt = showDate.toDateString();
  return (
    <div>
      <center>
        
        {dt}
      </center>
    </div>
  );
}
