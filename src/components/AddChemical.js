import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import "./addChemical.css";
import { useDispatch } from "react-redux";
import { addNewChemical, findChemical } from "../redux/chemicalSlice";

export default function AddChemical() {
  const dispatch = useDispatch();
  const [find, setFind] = useState("");
  const [name, setname] = useState("");
  const [formula, setFormula] = useState("");
  const [item, setItem] = useState({ name: "", formula: "" });
  const handle_Add = (item) => {
    dispatch(addNewChemical(item));
  };
  const handle_find=(find)=>{
    dispatch(findChemical(find))
  }
  return (
    <div>
      <div className="inputChemical my-2">
        <Input
          className="mx-2"
          placeholder="Enter name chemical"
          value={name}
          onChange={(e) => (
            setname(e.target.value),
            setItem({ name: e.target.value, formula: formula })
          )}
        />
        <Input
          className="mx-2"
          placeholder="Enter formula"
          value={formula}
          onChange={(e) => (
            setFormula(e.target.value),
            setItem({ name: name, formula: e.target.value })
          )}
        />

        <Button className="btn btn-success" onClick={() => handle_Add(item)}>
          Add chemical
        </Button>
      </div>
      <div className="inputChemical m-2">
        <Input
          placeholder="Find chemical"
          value={find}
          onChange={(e) => setFind(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              handle_find(find);
            }
          }}
        />
      </div>
    </div>
  );
}
