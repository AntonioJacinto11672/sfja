import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { InputField } from "../../components/input";
import { SelectField } from "../../components/Select";

// Tipos
type Dependente = {
  tipo: string;
  nome: string;
  dataNascimento: string;
};

export type FormData = {
  nome: string;
  fatherName: string;
  motherName: string;
  localTrabalho: string;
  funcao: string;
  numAgente: string;
  admissao: string;
  categoria: string;
  dataNascimento: string;
  sexo: string;
  estadoCivil: string;
  bi: string;
  cartaConducao: string;
  nif: string;
  telefone: string;
  telemovel: string;
  whatsapp: string;
  natural: string;
  municipio: string;
  provincia: string;
  endereco: string;
  numero: string;
  bairro: string;
  email1: string;
  email2: string;
  escolaridade: string;
  redeSocial: string;
  dependentes: Dependente[];
};
/* 
// 🔹 InputField Component
const InputField = ({
  label,
  type = "text",
  register,
  name,
  errors,
  rules,
}: {
  label: string;
  type?: string;
  register: any;
  name: keyof FormData | string;
  errors: any;
  rules?: any;
}) => (
  <div>
    <label className="block text-sm font-medium">{label}</label>
    <input
      type={type}
      {...register(name, rules)}
      className={`w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none ${
        errors[name] ? "border-red-500" : "border-gray-300"
      }`}
    />
    {errors[name] && (
      <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
    )}
  </div>
); */

/* // 🔹 SelectField Component
const SelectField = ({
  label,
  register,
  name,
  options,
  errors,
  rules,
}: {
  label: string;
  register: any;
  name: keyof FormData;
  options: string[];
  errors: any;
  rules?: any;
}) => (
  <div>
    <label className="block text-sm font-medium">{label}</label>
    <select
      {...register(name, rules)}
      className={`w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none ${
        errors[name] ? "border-red-500" : "border-gray-300"
      }`}
    >
      <option value="">Selecione...</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {errors[name] && (
      <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
    )}
  </div>
);
 */
export default function SindicalForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      dependentes: [{ tipo: "", nome: "", dataNascimento: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "dependentes",
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-6">
      <img src={"../../assets/logo.png"} alt="Logo" className="mx-auto mb-6 w-32 h-32" />
      <h1 className="text-2xl font-bold text-center mb-6">
        Proposta de Admissão ao Quadro Social
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Dados Pessoais */}
        <fieldset className="grid md:grid-cols-2 gap-4 border p-4 rounded-lg">
          <legend className="font-semibold text-lg">Dados Pessoais</legend>

          <InputField
            label="Nome"
            name="nome"
            register={register}
            errors={errors}
            rules={{ required: "Campo obrigatório" }}
          />
          <InputField
            label="Nome do Pai"
            name="fatherName"
            register={register}
            errors={errors}
            rules={{ required: "Campo obrigatório" }}
          />
          <InputField
            label="Nome da Mãe"
            name="motherName"
            register={register}
            errors={errors}
            rules={{ required: "Campo obrigatório" }}
          />

          <InputField
            label="Local de Trabalho"
            name="localTrabalho"
            register={register}
            errors={errors}
            rules={{ required: "Campo obrigatório" }}
          />
          <InputField
            label="Função"
            name="funcao"
            register={register}
            errors={errors}
            rules={{ required: "Campo obrigatório" }}
          />
          <InputField
            label="Nº Agente"
            name="numAgente"
            type="number"
            register={register}
            errors={errors}
            rules={{
              required: "Campo obrigatório",
              pattern: {
                value: /^[0-9]+$/,
                message: "Apenas números permitidos",
              },
            }}
          />
          <InputField
            label="Admissão"
            name="admissao"
            type="date"
            register={register}
            errors={errors}
            rules={{ required: "Campo obrigatório" }}
          />
          <SelectField
            label="Categoria Actual"
            name="categoria"
            register={register}
            errors={errors}
            options={["Oficial de Diligências de 1ª Classe", "Oficial de Diligências de 2ª Classe", "Oficial de Diligências de 3ª Classe",
              "Ajudante de Escrivão de Direito 1ª Classe", "Ajudante de Escrivão de Direito 2ª Classe", "Ajudante de Escrivão de Direito 3ª Classe",
              "Escrivão de Direito 1ª Classe", "Escrivão de Direito 2ª Classe", "Escrivão de Direito 3ª Classe", "Secretário Judicial"]}
            rules={{ required: "Campo obrigatório" }}
          />
          <InputField
            label="Data de Nascimento"
            name="dataNascimento"
            type="date"
            register={register}
            errors={errors}
            rules={{ required: "Campo obrigatório" }}
          />
          <SelectField
            label="Sexo"
            name="sexo"
            register={register}
            errors={errors}
            options={["Masculino", "Feminino"]}
            rules={{ required: "Campo obrigatório" }}
          />
          <SelectField
            label="Estado Civil"
            name="estadoCivil"
            register={register}
            errors={errors}
            options={["Solteiro", "Casado"]}
            rules={{ required: "Campo obrigatório" }}
          />
          <InputField
            label="B.I. nº"
            name="bi"
            register={register}
            errors={errors}
            rules={{
              required: "Campo obrigatório",
              pattern: {
                value: /^[0-9]{9}[A-Za-z]{2}[0-9]{3}$/,
                message:
                  "Formato inválido. Ex: 123456789LA001 (9 números, 2 letras, 3 números)",
              },
            }}
          />
          <InputField
            label="Carta de Condução nº"
            name="cartaConducao"
            register={register}
            errors={errors}

          />
          <InputField
            label="NIF"
            name="nif"
            register={register}
            errors={errors}
            rules={{
              required: "Campo obrigatório",
              pattern: {
                value: /^[0-9]{9}[A-Za-z]{2}[0-9]{3}$/,
                message:
                  "Formato inválido. Ex: 123456789LA001 (9 números, 2 letras, 3 números)",
              },
            }}
          />
        </fieldset>

        {/* Contactos */}
        <fieldset className="grid md:grid-cols-2 gap-4 border p-4 rounded-lg">
          <legend className="font-semibold text-lg">Contactos</legend>

          <InputField
            label="Telefone"
            name="telefone"
            register={register}
            errors={errors}
            rules={{ required: "Campo obrigatório" }}
          />
          <InputField
            label="Telemóvel"
            name="telemovel"
            register={register}
            errors={errors}
            rules={{ required: "Campo obrigatório" }}
          />
          <InputField
            label="WhatsApp"
            name="whatsapp"
            register={register}
            errors={errors}
            rules={{ required: "Campo obrigatório" }}
          />
          <InputField
            label="Natural"
            name="natural"
            register={register}
            errors={errors}
            rules={{ required: "Campo obrigatório" }}
          />
          <InputField
            label="Município"
            name="municipio"
            register={register}
            errors={errors}
            rules={{ required: "Campo obrigatório" }}
          />
          <InputField
            label="Província"
            name="provincia"
            register={register}
            errors={errors}
            rules={{ required: "Campo obrigatório" }}
          />
          <InputField
            label="Endereço"
            name="endereco"
            register={register}
            errors={errors}
            rules={{ required: "Campo obrigatório" }}
          />
          <InputField
            label="Nº"
            name="numero"
            register={register}
            errors={errors}
            rules={{ required: "Campo obrigatório" }}
          />
          <InputField
            label="Bairro"
            name="bairro"
            register={register}
            errors={errors}
            rules={{ required: "Campo obrigatório" }}
          />
          <InputField
            label="Email 1"
            name="email1"
            type="email"
            register={register}
            errors={errors}
            rules={{
              required: "Campo obrigatório",
              pattern: { value: /^\S+@\S+$/i, message: "Email inválido" },
            }}
          />
          <InputField
            label="Email 2"
            name="email2"
            type="email"
            register={register}
            errors={errors}
            rules={{
              required: "Campo obrigatório",
              pattern: { value: /^\S+@\S+$/i, message: "Email inválido" },
            }}
          />
          <InputField
            label="Escolaridade"
            name="escolaridade"
            register={register}
            errors={errors}
            rules={{ required: "Campo obrigatório" }}
          />
          <InputField
            label="Rede Social"
            name="redeSocial"
            register={register}
            errors={errors}
            rules={{ required: "Campo obrigatório" }}
          />
        </fieldset>

        {/* Dependentes Dinâmicos */}
        <fieldset className="border p-4 rounded-lg">
          <legend className="font-semibold text-lg">Dependentes</legend>

          {fields.map((field, index) => (
            <div
              key={field.id}
              className="grid md:grid-cols-3 gap-4 mb-4 items-end"
            >
              <InputField
                label="Tipo"
                name={`dependentes.${index}.tipo`}
                register={register}
                errors={errors}
                rules={{ required: "Campo obrigatório" }}
              />
              <InputField
                label="Nome"
                name={`dependentes.${index}.nome`}
                register={register}
                errors={errors}
                rules={{ required: "Campo obrigatório" }}
              />
              <InputField
                label="Data de Nascimento"
                name={`dependentes.${index}.dataNascimento`}
                type="date"
                register={register}
                errors={errors}
                rules={{ required: "Campo obrigatório" }}
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-red-600 text-sm hover:underline md:col-span-3 text-left"
              >
                Remover
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => append({ tipo: "", nome: "", dataNascimento: "" })}
            className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            + Adicionar Dependente
          </button>
        </fieldset>

        {/* Autorização */}
        <fieldset className="border p-4 rounded-lg">
          <legend className="font-semibold text-lg">Autorização</legend>
          <p className="text-sm text-gray-700">
            Com a minha adesão ao Sindicato, autorizo que me sejam descontadas
            as mensalidades sindicais equivalentes a 1% do salário básico, na
            folha de pagamento, conforme nº 1 do artigo 10º dos Estatutos do
            Sindicato e Lei Sindical vigente.
          </p>
        </fieldset>

        {/* Botão */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}