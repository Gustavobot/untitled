import {useState} from "react";
import {Button, Grid, Paper, TextField} from "@material-ui/core";
import {useForm,Controller} from "react-hook-form";
import InputMask from 'react-input-mask';

const URL = 'http://viacep.com.br/ws/'

const FormComponent = () => {
    const [state, setState] = useState({id:0, data:{}})

    const { register, handleSubmit, watch, errors, setValue, control } = useForm();
    const onSubmit = data => console.log(data);

    const PesquisarCep = (cep) =>{
        fetch(`${URL}${cep}/json`).
        then(r => r.json()).then(r => {
            console.log(state)
            setState({...state, data: r})
            setValue('localidade', r.localidade)
        })
    }

    return (
        <Paper>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                <Grid item>
                    <TextField
                        error={!!errors['cep']}
                        helperText={errors['cep']?.message}
                        inputRef={register({ required: { value: true, message: "campo obrigatorio" }, maxLength: 8})}
                        label="Cep"
                        name={'cep'}
                        onChange={(e) => {

                            if (e.target.value.length==8){
                            PesquisarCep(e.target.value)
                        }
                    }}/>
                </Grid>
            <Grid item>
                <TextField
                    name={'fone'}
                    label="Telefone"
                    inputRef={register}
                />
            </Grid>
                <Grid item>
                <TextField
                    name={'localidade'}
                    label="Cidade"
                    disabled
                    // value={state.data?.localidade}
                    inputRef={register}
                />
            </Grid>
            {/*<Grid item>*/}
            {/*    <TextField*/}
            {/*        name={'cpf'}*/}
            {/*        label="CPF"*/}
            {/*        inputRef={register}*/}
            {/*    />*/}
            {/*</Grid>*/}
            </Grid>
                <Grid>
                    <Controller
                        as={
                            // <CustomInputMask field={field} errors={errors} />
                            <InputMask mask={'999.999.999-99'} >
                                {() => (
                                    <TextField
                                        error={!!errors['cpf']}
                                        name={'cpf'}
                                        label={'CPF'}
                                        helperText={errors['cpf']?.message}
                                    />
                                )}
                            </InputMask>
                        }
                        control={control}
                        name={'cpf'}
                    />
                </Grid>
                <Grid item>
                    <Button color="secondary" variant={'contained'} type={'submit'}>Enviar</Button>
                </Grid>
            </form>
        </Paper>
    )
}
export default FormComponent