import React, { FC, useEffect, useState } from 'react'
import { Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import { IModalInputs, SpendingItem } from '../types/types';

interface ModalProps {
  modal: boolean,
  setModal: (value: boolean) => void,
  modalInputs: IModalInputs,
  setModalInputs: (value: IModalInputs) => void,
  editItem: () => void
}

const Modal: FC<ModalProps> = ({modal, setModal, modalInputs, setModalInputs, editItem}) => {

  return (
    <Dialog onClose={() => setModal(!modal)} open={modal}>
      <DialogContent>
      <DialogTitle>Изменить данные расходов</DialogTitle>
        <TextField
          defaultValue={modalInputs.place}
          onChange={e => setModalInputs({...modalInputs, place: e.currentTarget.value})}
          fullWidth
          label="Куда было потрачено"
          variant="filled"
          color="secondary"
        />
        <TextField
          type="number"
          defaultValue={modalInputs.cost}
          onChange={e => setModalInputs({...modalInputs, cost: Number(e.currentTarget.value)})}
          fullWidth
          label="Сколько было потрачено"
          variant="filled"
          color="secondary"
        />
        <TextField
          type="date"
          defaultValue={modalInputs.date}
          onChange={e => setModalInputs({...modalInputs, date: e.currentTarget.value})}
          fullWidth
          label="Когда было потрачено"
          variant="filled"
          color="secondary"
        />
        <Button
          onClick={editItem}
          style={{marginTop: 5}}
          color='secondary'
          variant="contained"
        >
          Изменить
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default Modal