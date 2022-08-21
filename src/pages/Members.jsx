import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Title from "./Title";

import { contactService } from "../services/contactService";
import { width } from "@mui/system";

export const Members = () => {
  let memberList = contactService.query();
  return (
    <div className="Members">
      <React.Fragment>
        {/* <Title>Recent Orders</Title> */}
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>full name</TableCell>
              <TableCell>Phone number</TableCell>
              <TableCell>Team</TableCell>
              <TableCell>Start time</TableCell>
              <TableCell>End time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {memberList.map((member) => (
              <TableRow key={member._id}>
                <TableCell>
                  <div
                    style={{
                      backgroundImage: `url(${member.avatar})`,
                      width: `24px`,
                      height: `24px`,
                      backgroundSize: `contain`,
                      borderRadius: `50%`,
                    }}
                  />
                </TableCell>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.phone}</TableCell>
                <TableCell>{member.team}</TableCell>
                <TableCell>10:00</TableCell>
                <TableCell>12:00</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    </div>
  );
};
