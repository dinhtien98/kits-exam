import React, { useState } from "react";
import { Button, Input, ListGroupItem } from "reactstrap";
import "./viewChemical.css";
import { useDispatch } from "react-redux";
import { deleteChemical, editChemical } from "../redux/chemicalSlice";

export default function ViewChemical(props) {
  const { item } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [flag,setFlag]=useState()
  const [name, setName] = useState("");
  const [formula, setFormula] = useState("");
  const [items, setItems] = useState({id:"", name: "", formula: "" });
  const dispatch = useDispatch();
  const handle_Delete = (id) => {
    dispatch(deleteChemical(id));
  };
  const handle_Edit = (items) => {
    dispatch(editChemical(items));
  };
  return (
    <ListGroupItem className="m-2">
      <div className="itemChemical">
        <div>
          <div onDoubleClick={() => (setIsEdit(!isEdit),setFlag(0),setName(item.name))}>
            {isEdit&&flag==0 ? (
              <Input
                value={name}
                onChange={(e) => (
                  setName(e.target.value),
                  setItems({id:item.id, name: e.target.value, formula: item.formula })
                )}
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    handle_Edit(items);
                    setIsEdit(!isEdit);
                    console.log(items)
                  }
                }}
              />
            ) : (
              <p>Name: {item.name}</p>
            )}
          </div>
          <div onDoubleClick={() => (setIsEdit(!isEdit),setFlag(1),setFormula(item.formula))}>
            {isEdit&&flag==1 ? (
              <Input
                value={formula}
                onChange={(e) => (
                  setFormula(e.target.value),
                  setItems({id:item.id, name: item.name, formula: e.target.value })
                )}
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    handle_Edit(items);
                    setIsEdit(!isEdit);
                  }
                }}
              />
            ) : (
              <p>Formula: {item.formula}</p>
            )}
          </div>
        </div>

        <Button className="btn btn-danger" onClick={() => handle_Delete(item)}>
          delete
        </Button>
      </div>
    </ListGroupItem>
  );
}
